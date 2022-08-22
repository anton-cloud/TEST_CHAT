import moment from "moment";

import Avatar from "../../General/Avatar";
import Flex from "../../General/Flex";

import { colors } from "../../../data/variables";
import './MessageItem.scss'

const { accent, secondary } = colors;

const MessageItem = ({ message, imageUrl, contactId }) => {
  const isOwnMessage = (message.from !== contactId);
  return (
    <Flex style={{ flexDirection: "row" }}>
      {
        !isOwnMessage
          ? <Avatar imageUrl={imageUrl} />
          : null
      }
      <Flex>
        <div className="message__item" style={isOwnMessage ? { alignItems: "flex-end" } : { alignItems: "flex-start" }}>
          <div className="message__text" style={isOwnMessage ? { backgroundColor: accent } : { backgroundColor: secondary }}>
            <p className="message__value" style={isOwnMessage ? { color: "black" } : { color: "white" }}>{message.value}</p>
          </div>
          <div className="message__time" style={isOwnMessage ? { textAlign: "right" } : { textAlign: "left" }}>
            <p>
              {
                moment(message.createdDate).format("MM/DD/YY LT")
              }
            </p>
          </div>
        </div>
      </Flex>
    </Flex>
  );
}

export default MessageItem;