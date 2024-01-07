import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { protectedData } from '../../services/authService';

export default function Dashboard() {
    const { authState } = useAuth();
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const data = await protectedData(authState.accessToken);
                setDashboardData(data.message);
            } catch (error) {
                console.error("Failed to fetch protected data:", error);
            }
        };
 
        fetchProtectedData();
    }, [authState.accessToken]);

 
    return (
        <>
            {dashboardData !== null ? (
                <h1>{dashboardData}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
