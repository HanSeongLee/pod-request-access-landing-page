import React, {HTMLAttributes} from "react";

const partners = [
    {
        name: 'spotify',
        image: '/img/spotify.svg',
    },
    {
        name: 'apple podcast',
        image: '/img/apple-podcast.svg',
    },
    {
        name: 'google podcasts',
        image: '/img/google-podcasts.svg',
    },
    {
        name: 'pocket casts',
        image: '/img/pocket-casts.svg',
    },
];

const PartnerContainer: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {partners?.map(({name, image}, index) => (
                <li key={index}>
                    <img src={image}
                         alt={name}
                         data-name={name}
                    />
                </li>
            ))}
        </ul>
    );
};

export default PartnerContainer;
