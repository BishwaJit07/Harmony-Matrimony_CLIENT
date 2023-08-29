
import { FacebookProvider, CustomChat } from 'react-facebook';



const MessageUsFb = () => {
    return (
        <div>
              <FacebookProvider appId="1485151968691235" chatSupport>
        <CustomChat themeColor="#ef4444" pageId="105726664173668" minimized={true}/>
      </FacebookProvider>  
        </div>
    );
};

export default MessageUsFb;