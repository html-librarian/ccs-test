import { memo, useState } from "react";
import style from "./style.module.scss";
import Button from "../Button";
import { ChatIcon, CloseIcon } from '../Icons';

export const LiveChat = memo(() => {
    const [liveChatShow, setLiveChatShow] = useState(false);

    const toggleLiveChat = () => {
        setLiveChatShow(!liveChatShow);
    };

    return (
        <div className={style.livechat}>
            <div className={style.livechat_wrap}>
                {liveChatShow && <div className={style.livechat_chat}>Представим что тут чат</div>}
                <Button smallSize rounded shadow onClick={toggleLiveChat}>
                    {liveChatShow ? (
                        <CloseIcon fill="currentColor" />
                    
                    ) : (
                        <>
                            <span>Live Chat</span>
                            <ChatIcon />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
});