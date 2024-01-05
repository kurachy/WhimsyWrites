import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { protectedData } from '../../services/authService';
import { isTokenExpired } from '../../utils/isTokenExpired';
import { renewAccessToken } from '../../utils/renewAccessToken';

export default function Dashboard() {
    const { authState, setAuthInfo } = useAuth();
    const [dashboardData, setDashboardData] = useState(null);


    useEffect(() => {
        const fetchProtectedData = async () => {
            let accessToken = authState.accessToken;

            if (isTokenExpired(accessToken)) {
                accessToken = await renewAccessToken(accessToken);
                await setAuthInfo(accessToken);
            }

            try {
                const data = await protectedData(accessToken);
                setDashboardData(data.message);
            } catch (error) {
                console.error("Failed to fetch protected data:", error);
            }
        };

        fetchProtectedData();
    }, [authState, setAuthInfo]);

    return (
        <>

            {dashboardData !== null ? (
                <h1>{dashboardData}</h1>

            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}