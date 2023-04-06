import githubIcon from "@icons/socials/Github.svg";
import spotifyIcon from "@icons/socials/Spotify.svg";
import telegramIcon from "@icons/socials/Telegram.svg";

const data = {
	header: [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Projects",
			link: "/projects",
		},
		{
			title: "Contacts",
			link: "/contacts",
		},
	],

	footer: [
		{
			icon: githubIcon,
			link: "https://github.com/Innosan",
			title: "GitHub",
		},
		{
			icon: telegramIcon,
			link: "https://t.me/inno_san",
			title: "Telegram",
		},
		{
			icon: spotifyIcon,
			link: "https://open.spotify.com/artist/5CySiPyPSavXUd1RhJ3bUS?si=HVnCEumMSsqs8NYbULKNqg",
			title: "Spotify",
		},
	],
};

export const { header, footer } = data;
