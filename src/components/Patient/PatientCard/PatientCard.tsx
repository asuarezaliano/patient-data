import React, { useState, useEffect } from 'react';
import { Patient } from '../patient.interface';
import {
  Card,
  Avatar,
  Header,
  Name,
  CreatedAt,
  Website,
  Description,
  ExpandButton,
} from './PatientCard.layout';
import Button from '../../shared/Button';

interface PatientCardProps {
  patient: Patient;
  onEditPatient: (patient: Patient) => void;
}

const defaultAvatar = '/assets/avatar.png';
const MAX_CHARACTERS_LENGTH = 200;

const PatientCard: React.FC<PatientCardProps> = React.memo(({ patient, onEditPatient: onEdit }) => {
  const [avatarSrc, setAvatarSrc] = useState(patient.avatar || defaultAvatar);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setAvatarSrc(patient.avatar || defaultAvatar);
  }, [patient.avatar]);

  const handleImageError = () => {
    if (avatarSrc !== defaultAvatar) {
      setAvatarSrc(defaultAvatar);
    }
  };

  const hasExpand = patient.description.length > MAX_CHARACTERS_LENGTH;

  return (
    <Card expanded={expanded}>
      <Header>
        <Avatar src={avatarSrc} alt={patient.name} onError={handleImageError} />
        <Name>{patient.name}</Name>
      </Header>
      <CreatedAt>Date: {new Date(patient.createdAt).toLocaleDateString()}</CreatedAt>
      <Website>
        <a href={patient.website} target="_blank" rel="noopener noreferrer">
          Go to website
        </a>
      </Website>
      <Description>
        {!hasExpand ? (
          <p>{patient.description}</p>
        ) : (
          <p>
            {expanded
              ? patient.description
              : `${patient.description.slice(0, MAX_CHARACTERS_LENGTH)}...`}
          </p>
        )}
      </Description>
      {hasExpand && (
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? 'See less' : 'See more'}
        </ExpandButton>
      )}
      <Button typestyle="advance" onClick={() => onEdit(patient)}>
        Edit
      </Button>
    </Card>
  );
});

export default PatientCard;
