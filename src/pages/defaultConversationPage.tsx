import { DefaultConversationPageStyle } from "../utils/styles"
import backgroundImage from '../assets/defaultBackground.webp';
import styles from './pages.module.scss';

export const DefaultConversationPage = () =>{
    return(
        <DefaultConversationPageStyle>
          <img className={styles.backgroundImage} src={backgroundImage} alt="background" />
        </DefaultConversationPageStyle>
    )

}