import { Github, LinkedIn } from '../components/AllSvgs'
import myPDF from '../assets/myPDF.pdf'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { NavLink } from 'react-router-dom'
import { darkTheme, mediaQueries } from '../components/Themes'

const SM = styled.div`
	transform: scale(0.9);
	transition: scale 0.3s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 2rem;

	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;

		${mediaQueries(20)`
      margin: 0.3rem 0;


  `};
	}

	${mediaQueries(40)`
  left: 1rem;

      svg{
        width:20px;
        height:20px
      }

  `};
`
const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === 'dark' ? darkTheme.text : darkTheme.body};
`
const SocialIcons = (props) => {
	const mq = window.matchMedia('(max-width: 40em)').matches

	return (
		<Icons>
			<motion.div
				initial={{ transform: 'scale(0)' }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: 'spring', duration: 1, delay: 1 }}
			>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to={{ pathname: 'https://github.com/mickey61295' }}
				>
					<Github
						width={25}
						height={25}
						fill={
							props.theme === 'dark' ? `${darkTheme.text}` : `${darkTheme.body}`
						}
					/>
				</NavLink>
			</motion.div>
			<a
				style={{ textDecoration: 'none', color: 'black', height: '1.5rem' }}
				href={myPDF}
				download={"Mahesh's Resume.pdf"}
			>
				<img
					style={{ height: '1.5rem' }}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCO3vxE-Mn-P3uJnfpX3lSmwtjnVdXTfRNQ&usqp=CAU"
					alt=""
				/>
			</a>
			{/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/code_bucks" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${darkTheme.text}` : `${darkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}
			{/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/codebucks27" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${darkTheme.text}` : `${darkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}
			{/* <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA",
          }}
        >
          <YouTube
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${darkTheme.text}` : `${darkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}
			<div>
				<SM>
					<NavLink
						style={{ color: 'inherit' }}
						target="_blank"
						to={{ pathname: 'https://www.linkedin.com/in/mahe-sh/' }}
					>
						<LinkedIn
							width={25}
							height={25}
							fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
						/>
					</NavLink>
				</SM>
			</div>
			<Line
				initial={{ height: 0 }}
				animate={{ height: mq ? '5rem' : '8rem' }}
				color={props.theme}
				transition={{ type: 'spring', duration: 1, delay: 0.8 }}
			/>
		</Icons>
	)
}

export default SocialIcons
