import { FaGithub, FaTwitterSquare } from 'react-icons/fa'
import styled from 'styled-components'
import { IconLink } from '../common/Buttons/IconLink'

const ContainerBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 2px;
	position: absolute;
	right: 30px;
	bottom: 20px;
`

const FeedbackLink = styled.a`
	font-weight: bold;
	font-size: ${props => props.theme.fontSize.small};
	padding: 3px 8px;
	margin-left: 2px;
	color: ${props => props.theme.base['1']};
	&:hover {
		color: ${props => props.theme.primary['3']};
	}
`

export const SocialIcons = () => (
	<ContainerBox>
		<IconLink target="_blank" url="https://github.com/Chatmosphere/chatmosphere-app">
			<FaGithub />
		</IconLink>
		<FeedbackLink target="_blank" href="https://github.com/MichaelKreil/chatmosphere-app">
			this fork
		</FeedbackLink>
		<IconLink target="_blank" url="https://twitter.com/chatmosphereCC">
			<FaTwitterSquare />
		</IconLink>
		<FeedbackLink target="_blank" href="https://chatmosphere.cc/feedback">
			Feedback
		</FeedbackLink>
	</ContainerBox>
)
