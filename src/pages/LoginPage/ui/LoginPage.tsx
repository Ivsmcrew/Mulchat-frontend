import Particles from "@pages/LoginPage/ui/components/magicui/particles"
import style from "./LoginPage.module.scss"

const HomePage = () => {
	return (
		<main className={style.loginPage}>
			Hello world
      <Particles
        className={style.particles}
        quantity={300}
        ease={100}
        color={"#008cac"}
        refresh
      />
		</main>
	)
}

export default HomePage
