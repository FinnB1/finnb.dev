import React, { useEffect } from 'react';

const Tube: React.FC = () => {

    const [liveDepartures, setLiveDepartures] = React.useState<any[]>([]);

    const fetchLiveDepartures = async () => {
        const apiUrl = `https://api.tfl.gov.uk/StopPoint/940GZZNEUGST/Arrivals`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            const outboundDepartures = data
                .filter((departure: any) => departure.direction === "outbound")
                .map((departure: any) => ({
                    destinationName: departure.destinationName,
                    timeToStation: departure.timeToStation,
                }));
            console.log('Outbound departures:', outboundDepartures);
            return outboundDepartures;
        } catch (error) {
            console.error('Failed to fetch live departures:', error);
            return [];
        }
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            const departures = await fetchLiveDepartures();
            setLiveDepartures(departures);
        }, 30000); // Fetch every 30s

        // Initial fetch
        fetchLiveDepartures().then(departures => setLiveDepartures(departures));

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px', flexDirection: 'column', textAlign: 'center'
         }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Nine Elms Departures</h1>
            <div style={{ width: '80%', maxWidth: '600px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#0078d4', color: '#ffffff', textAlign: 'left' }}>
                            <th style={{ padding: '12px', fontWeight: 'bold' }}>Destination</th>
                            <th style={{ padding: '12px', fontWeight: 'bold' }}>Expected in (mins)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liveDepartures.map((departure, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{departure.destinationName}</td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                                    <span title={`${departure.timeToStation} seconds`}>
                                        {Math.floor(departure.timeToStation / 60)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tube;