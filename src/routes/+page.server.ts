import { sample } from 'lodash-es';
import vocab from '../vocab.json';
import type { PageServerLoad } from './$types';

export type Word = { root: string; meaning: string; derivates: string[] };

export const load: PageServerLoad = async () => {
	const word = sample(vocab as Record<string, Word>);
	return { word };
};
