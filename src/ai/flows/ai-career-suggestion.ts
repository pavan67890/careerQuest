// A Genkit Flow that suggests potential careers and educational paths based on user profile and assessment data.

'use server';

/**
 * @fileOverview AI-powered career suggestion agent.
 *
 * - aiCareerSuggestion - A function that suggests careers based on user input.
 * - AICareerSuggestionInput - The input type for the aiCareerSuggestion function.
 * - AICareerSuggestionOutput - The return type for the aiCareerSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AICareerSuggestionInputSchema = z.object({
  testResults: z.string().describe('The results from the career test.'),
  interests: z.string().describe('The interests of the student.'),
  strengths: z.string().describe('The strengths of the student.'),
});
export type AICareerSuggestionInput = z.infer<typeof AICareerSuggestionInputSchema>;

const AICareerSuggestionOutputSchema = z.object({
  careerSuggestions: z
    .string()
    .describe('A list of career suggestions based on the input.'),
  educationalPaths: z
    .string()
    .describe('A list of educational paths that align with the career suggestions.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the career suggestions and educational paths.'),
});
export type AICareerSuggestionOutput = z.infer<typeof AICareerSuggestionOutputSchema>;

export async function aiCareerSuggestion(
  input: AICareerSuggestionInput
): Promise<AICareerSuggestionOutput> {
  return aiCareerSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiCareerSuggestionPrompt',
  input: {schema: AICareerSuggestionInputSchema},
  output: {schema: AICareerSuggestionOutputSchema},
  prompt: `You are an AI career consultant. You will analyze the career test results, interests, and strengths of the student to suggest potential careers and educational paths.

Career Test Results: {{{testResults}}}
Interests: {{{interests}}}
Strengths: {{{strengths}}}

Suggest potential careers and educational paths that align with the student's strengths and interests. Provide a reasoning for your suggestions.

Format your response as follows:
Career Suggestions: [list of career suggestions]
Educational Paths: [list of educational paths]
Reasoning: [reasoning behind the suggestions]`,
});

const aiCareerSuggestionFlow = ai.defineFlow(
  {
    name: 'aiCareerSuggestionFlow',
    inputSchema: AICareerSuggestionInputSchema,
    outputSchema: AICareerSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
