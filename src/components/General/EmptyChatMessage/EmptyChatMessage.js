import './EmptyChatMessage.scss'

const EmptyChatMessage = ({ userName }) => {
    return (
        <div className="emptyChat">
            <p>Start new chat with {userName}</p>
        </div>
    );
}

export default EmptyChatMessage;