import moment from "moment";

import Avatar from "../../General/Avatar";
import Flex from "../../General/Flex";

import { colors } from "../../../data/variables";
import './MessageItem.scss'

const { accent, secondary } = colors;

const MessageItem = ({ message, imageUrl, contactId }) => {
  const isownmessage = (message.from !== contactId).toString();
  return (
    <Flex style={{ flexDirection: "row" }}>
      {
        !isownmessage
          ? <Avatar imageUrl={imageUrl} />
          : null
      }
      <Flex>
        <div className="message__item" style={isownmessage ? { alignItems: "flex-end" } : { alignItems: "flex-start" }} isownmessage={isownmessage}>
          <div className="message__text" style={isownmessage ? { backgroundColor: accent } : { backgroundColor: secondary }}>
            <p className="message__value" style={isownmessage ? { color: "black" } : { color: "white" }}>{message.value}</p>
          </div>
          <div className="message__time" style={isownmessage ? { textAlign: "right" } : { textAlign: "left" }}>
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