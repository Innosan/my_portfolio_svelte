export type Project = {
	id: number;
	title: string;
	description: string;
	created_at: string;
	tags: object[];
	is_highlighted: number;
	thumbnail_url: string;
};

export type GetProjectsResponse = {
	data: Project[];
};
