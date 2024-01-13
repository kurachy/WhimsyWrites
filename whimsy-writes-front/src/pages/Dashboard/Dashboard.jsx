import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { fetchArticlesByUserId } from '../../services/articleService'
import DataTable from '../../components/DataTable/DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

import './dashboard.css'

export default function Dashboard() {
  const { authState } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {

    const fetchArticles = async () => {
      if (authState.user && authState.user.id) {
        try {
          const articles = await fetchArticlesByUserId(authState.user.id)
          setDashboardData(articles);
        } catch (error) {
          console.error("Failed to fetch articles:", error);
        }
      }
    };
    fetchArticles();

  }, [authState.user]);

  const handleButtonClick = (row, action) => {
    console.log(`Action: ${action} on row:`, row);
  };

  const columns = [
    { Header: 'Article', accessor: 'title' },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: (row) => (
        <div className='dashboard__table-buttons'>
          <button onClick={() => handleButtonClick(row, 'edit')}><FontAwesomeIcon icon={faPenToSquare} /></button>
          <button onClick={() => handleButtonClick(row, 'delete')}><FontAwesomeIcon icon={faTrash} /></button>
          <button onClick={() => handleButtonClick(row, 'view')}><FontAwesomeIcon icon={faEye} /></button>
        </div>
      )
    }
  ];



  return (
    <main className='dashboard-page'>
      <div className='dashboard-page__table-container'>
        {dashboardData !== null ? (
          <>
            <button className='dashboard__add-article-btn'>Add Article</button>
            <DataTable data={dashboardData} columns={columns} />
          </>

        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
