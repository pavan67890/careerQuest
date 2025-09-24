// src/ai/flows/ai-consultant-chatbot.ts
'use server';

/**
 * @fileOverview An AI consultant chatbot flow that provides career-related advice to students.
 *
 * - aiConsultantChatbot - A function that allows students to ask career-related questions and receive AI-driven guidance.
 * - AIConsultantChatbotInput - The input type for the aiConsultantChatbot function.
 * - AIConsultantChatbotOutput - The return type for the aiConsultantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIConsultantChatbotInputSchema = z.object({
  query: z.string().describe('The career-related question asked by the student.'),
});
export type AIConsultantChatbotInput = z.infer<typeof AIConsultantChatbotInputSchema>;

const AIConsultantChatbotOutputSchema = z.object({
  response: z.string().describe('The AI-driven guidance and advice provided to the student.'),
});
export type AIConsultantChatbotOutput = z.infer<typeof AIConsultantChatbotOutputSchema>;

export async function aiConsultantChatbot(input: AIConsultantChatbotInput): Promise<AIConsultantChatbotOutput> {
  return aiConsultantChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiConsultantChatbotPrompt',
  input: {schema: AIConsultantChatbotInputSchema},
  output: {schema: AIConsultantChatbotOutputSchema},
  prompt: `You are an AI career consultant chatbot designed to provide personalized advice and explore different career options for students.

  Student Question: {{{query}}}

  Provide helpful and informative guidance based on the student's question. Consider various career paths, educational requirements, and potential opportunities.
  Be encouraging and supportive in your response.
  `,
});

const aiConsultantChatbotFlow = ai.defineFlow(
  {
    name: 'aiConsultantChatbotFlow',
    inputSchema: AIConsultantChatbotInputSchema,
    outputSchema: AIConsultantChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
