import { octoberDays } from '../../constants';

export type DayBlockProps = {
	day: (typeof octoberDays)[number];
	index: number;
	onImageClick: (imageSrc: string) => void;
};
