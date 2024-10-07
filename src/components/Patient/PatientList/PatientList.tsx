import { Patient } from '../patient.interface';
import PatientCard from '../PatientCard/PatientCard';
import React from 'react';
import { styled } from 'styled-components';

interface PatientListProps {
  patients: Patient[];
  handleOpenModal: (patient: Patient) => void;
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

const PatientList: React.FC<PatientListProps> = React.memo(({ patients, handleOpenModal }) => {
  return (
    <div>
      {!patients || patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <Grid>
          {patients.map(patient => (
            <PatientCard key={patient.id} patient={patient} onEditPatient={handleOpenModal} />
          ))}
        </Grid>
      )}
    </div>
  );
});

export default PatientList;
