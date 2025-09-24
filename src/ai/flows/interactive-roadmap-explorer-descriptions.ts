'use server';

/**
 * @fileOverview Provides AI-generated descriptions for choices and paths in the Interactive Roadmap Explorer.
 *
 * Exports:
 * - `getRoadmapDescription`: Function to retrieve descriptions for roadmap choices.
 * - `RoadmapDescriptionInput`: Input type for `getRoadmapDescription`.
 * - `RoadmapDescriptionOutput`: Output type for `getRoadmapDescription`.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RoadmapDescriptionInputSchema = z.object({
  mode: z.enum(['Flowchart', 'Board Game']).describe('The mode of the roadmap explorer (Flowchart or Board Game).'),
  choice: z.string().describe('The specific choice or path being described.'),
  context: z.string().optional().describe('Additional context about the choice or path.'),
});
export type RoadmapDescriptionInput = z.infer<typeof RoadmapDescriptionInputSchema>;

const RoadmapDescriptionOutputSchema = z.object({
  description: z.string().describe('A detailed description of the roadmap choice or path.'),
});
export type RoadmapDescriptionOutput = z.infer<typeof RoadmapDescriptionOutputSchema>;

export async function getRoadmapDescription(input: RoadmapDescriptionInput): Promise<RoadmapDescriptionOutput> {
  return roadmapDescriptionFlow(input);
}

const roadmapDescriptionPrompt = ai.definePrompt({
  name: 'roadmapDescriptionPrompt',
  input: {schema: RoadmapDescriptionInputSchema},
  output: {schema: RoadmapDescriptionOutputSchema},
  prompt: `You are an AI career consultant. A user is exploring a career roadmap in {{{mode}}} mode and has encountered a choice: {{{choice}}}. {{#if context}}Here's some additional context: {{{context}}}.{{/if}} Provide a detailed and engaging description of this choice, explaining its potential implications and benefits.`,
});

const roadmapDescriptionFlow = ai.defineFlow(
  {
    name: 'roadmapDescriptionFlow',
    inputSchema: RoadmapDescriptionInputSchema,
    outputSchema: RoadmapDescriptionOutputSchema,
  },
  async input => {
    const {output} = await roadmapDescriptionPrompt(input);
    return output!;
  }
);
