// images
import InstagramPage from "../../assets/MyHobbies/instagram-page.jpeg";
import SteamPage from "../../assets/MyHobbies/steam-page.jpeg";
// styled components
import {
  BlackCenterTitle,
  WhiteCenterTitle,
} from "../../components/styled-component/Title";
import { BlackBackgroundContainer } from "../../components/styled-component/Container";

export default function MyHobbies() {
  return (
    <>
      <div>
        <BlackCenterTitle>I AM A DANCER!</BlackCenterTitle>
        <div className="text-left" style={{ paddingInline: 100 }}>
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
        <div className="w-100 text-center">
          <img src={InstagramPage} style={{ width: 450, height: 500 }} />
        </div>
      </div>
      <BlackBackgroundContainer>
        <WhiteCenterTitle>Gamer!?</WhiteCenterTitle>
        <div className="text-left" style={{ paddingInline: 100 }}>
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
        <div className="w-100 text-center">
          <img src={SteamPage} style={{ width: 450, height: 500 }} />
        </div>
      </BlackBackgroundContainer>
    </>
  );
}
