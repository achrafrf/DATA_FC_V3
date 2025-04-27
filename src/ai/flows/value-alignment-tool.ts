// This file is machine-generated - edit at your own risk.
'use server';
/**
 * @fileOverview A value alignment tool that scores user values against company values.
 *
 * - valueAlignmentTool - A function that handles the value alignment process.
 * - ValueAlignmentInput - The input type for the valueAlignmentTool function.
 * - ValueAlignmentOutput - The return type for the valueAlignmentTool function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ValueAlignmentInputSchema = z.object({
  userValues: z.string().describe('The values provided by the user.'),
  companyValues: z.string().describe('The company values.'),
});
export type ValueAlignmentInput = z.infer<typeof ValueAlignmentInputSchema>;

const ValueAlignmentOutputSchema = z.object({
  alignmentScore: z.number().describe('A score indicating the alignment between user and company values (0-100).'),
  suggestions: z.string().describe('Suggestions for areas of overlap between user and company values.'),
});
export type ValueAlignmentOutput = z.infer<typeof ValueAlignmentOutputSchema>;

export async function valueAlignmentTool(input: ValueAlignmentInput): Promise<ValueAlignmentOutput> {
  return valueAlignmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'valueAlignmentPrompt',
  input: {
    schema: z.object({
      userValues: z.string().describe('The values provided by the user.'),
      companyValues: z.string().describe('The company values.'),
    }),
  },
  output: {
    schema: z.object({
      alignmentScore: z.number().describe('A score indicating the alignment between user and company values (0-100).'),
      suggestions: z.string().describe('Suggestions for areas of overlap between user and company values.'),
    }),
  },
  prompt: `You are an AI assistant designed to evaluate the alignment between a user's values and a company's stated values.

  User Values: {{{userValues}}}
  Company Values: {{{companyValues}}}

  Provide an alignment score between 0 and 100, where 100 indicates perfect alignment. Also, provide suggestions for areas of overlap between the user's and company's values. Format the output as JSON. Ensure alignmentScore is a number and suggestions is a string.
`,
});

const valueAlignmentFlow = ai.defineFlow<
  typeof ValueAlignmentInputSchema,
  typeof ValueAlignmentOutputSchema
>(
  {
    name: 'valueAlignmentFlow',
    inputSchema: ValueAlignmentInputSchema,
    outputSchema: ValueAlignmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
