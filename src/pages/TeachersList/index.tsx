import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Dia</label>
            <input type="text" id="week-day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
    </div>
  )
}

export default TeachersList;