import React from 'react';

interface ReliefCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ReliefCard: React.FC<ReliefCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="relief-card">
            <img src={imageUrl} alt={title} className="relief-card_image" />
            <div className="relief-card__content">
                <h3 className="relief-card__title">{title}</h3>
                <p className="relief-card__description">{description}</p>
            </div>
        </div>
    );
};

export default ReliefCard;