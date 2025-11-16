import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function ViewProfile() {
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [step, setStep] = useState(1); // 1 = view, 2 = edit
    const [updating, setUpdating] = useState(false);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/CompanyUser/profile`, {
                    withCredentials: false,
                });

                if (!response.data?.user) {
                    throw new Error("Invalid response");
                }

                setProfile(response.data.user);
                setFormData(response.data.user);
            } catch (err) {
                setError("Failed to load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [API_BASE_URL, step]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateProfile = async () => {
        try {
            setUpdating(true);

            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
            };

            const res = await axios.put(
                `${API_BASE_URL}/CompanyUser/update/${profile?.id}`,
                payload,
                { withCredentials: false }
            );

            if (res.data) {
                setProfile(res.data.updatedUser || payload);
                setStep(1);
            }
        } catch (err) {
            alert("Failed to update profile");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
                Loading profile...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500 text-lg">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {step === 1 ? "My Profile" : "Edit Profile"}
                </h2>

                <div className="space-y-6">

                    {/* FULL NAME */}
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Full Name</p>
                        {step === 1 ? (
                            <p className="text-lg font-semibold text-gray-800">{profile?.name}</p>
                        ) : (
                            <input
                                name="name"
                                value={formData.name || ""}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Email</p>

                        {step === 1 ? (
                            <p className="text-lg font-semibold text-gray-800">{profile?.email}</p>
                        ) : (
                            profile?.role === "owner" ? (
                                <input
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={handleInputChange}
                                    className="w-full mt-1 p-2 border rounded-lg"
                                />
                            ) : (
                                <input
                                    name="email"
                                    value={formData.email || ""}
                                    disabled
                                    className="w-full mt-1 p-2 border rounded-lg bg-gray-100 text-gray-500"
                                />
                                //     <option value={formData.email}>{formData.email}</option>
                                // </select>
                            )
                        )}
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm font-medium">Role</p>

                        {step === 1 ? (
                            <p className="text-lg font-semibold text-gray-800">{profile?.role}</p>
                        ) : (
                            // Step 2: Role select list (only editable if owner)
                            <select
                                name="role"
                                value={formData.role || ""}
                                onChange={handleInputChange}
                                disabled={profile?.role !== "owner"}
                                className={`w-full mt-1 p-2 border rounded-lg ${profile?.role !== "owner" ? "bg-gray-100 text-gray-500" : ""
                                    }`}
                            >
                                <option value="owner">Owner</option>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                            </select>
                        )}
                    </div>


                    {/* PHONE */}
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Phone</p>
                        {step === 1 ? (
                            <p className="text-lg font-semibold text-gray-800">{profile?.phone}</p>
                        ) : (
                            <input
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleInputChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                            />
                        )}
                    </div>

                   
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Status</p>
                        <span
                            className={`px-3 py-1 rounded-full text-white text-sm inline-block mt-1 shadow-md ${profile?.status === "active" ? "bg-green-500" : "bg-red-500"
                                }`}
                        >
                            {profile?.status}
                        </span>
                    </div>



                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex justify-center">
                    {step === 1 ? (
                        <button
                            onClick={() => setStep(2)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <button
                            onClick={handleUpdateProfile}
                            disabled={updating}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 disabled:opacity-50"
                        >
                            {updating ? "Updating..." : "Update Profile"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

