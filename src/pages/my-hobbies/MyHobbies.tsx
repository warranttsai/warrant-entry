// images
import InstagramPage from "../../assets/MyHobbies/instagram-page.jpeg";
import SteamPage from "../../assets/MyHobbies/steam-page.jpeg";
// styled components
import {
  BlackCenterTitle,
  WhiteCenterTitle,
} from "../../components/styled-component/Title";
import { GreyBackgroundContainer } from "../../components/styled-component/Container";

export default function MyHobbies() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="my-hobbies-dancer-container">
        <BlackCenterTitle>I AM A DANCER!</BlackCenterTitle>
        <div className="text-left" style={{ paddingInline: "10vw" }}>
          <span>
            I had been dancing in Popping dance since September 2016. In June
            2022, I moved to Melbourne Australia and started developing the
            other styles such like House dance, Hip-hop dance, Waving dance,
            Comtemporary...etc. Dancing is one of my favorite thing in my life.
            While keep engaging in dancing community, I met many of brilliant
            people from different backgrounds, countries, races and religions.
          </span>
          <br />
          <br />
          <span>
            Also, I had honoured to be invited as Popping dance instructor in
            RMIT "Funkdelics" Dancing club in 2022 and 2023. Although they were
            beginner level class, getting in touch with the new generations
            really brought me many joys and happinesses!
          </span>
        </div>
        <br />
        <br />
        <img src={InstagramPage} style={{ maxWidth: 350, maxHeight: 400 }} />
      </div>
      <GreyBackgroundContainer id="my-hobbies-gamer-container">
        <WhiteCenterTitle>Gamer!?</WhiteCenterTitle>
        <div className="text-left" style={{ paddingInline: "10vw" }}>
          <span>
            It is always destress, relax and satisfying to play games! This is
            my another favorite thing! I enjoy the feeling to challenge myself
            in the game and collaborate with my mates to achieve our goals!
          </span>
          <br />
          <br />
          <span>
            My favorite games: APEX, Rainbow 6, Naraka, Farlight 84, Genshin,
            WoLong, Elder Ring
          </span>
        </div>
        <br />
        <br />
        <img src={SteamPage} style={{ maxWidth: 350, maxHeight: 400 }} />
      </GreyBackgroundContainer>
    </motion.div>
  );
}
