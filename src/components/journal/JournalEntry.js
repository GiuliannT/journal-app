export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture" 
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/6/65/Baby.tux-800x800.png)'
                }}
            >
            </div>
            <div className="jornal__entry-body">
                <p className="jornal__entry-title">
                    A new Day
                </p>
                <p className="jornal__entry-content">
                    gfnsjaigf ngsn gfsdognbajg nfajgfbaj fgja; bjfa .
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
