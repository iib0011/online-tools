import { Box, Grid, Stack, Typography } from '@mui/material';
import ExampleCard from './ExampleCard';

export interface ExampleCardProps {
  title: string;
  description: string;
  sampleText: string;
  sampleResult: string;
  requiredOptions: RequiredOptionsProps;
}

export interface RequiredOptionsProps {
  joinCharacter: string;
  deleteBlankLines: boolean;
  deleteTrailingSpaces: boolean;
}

interface ExampleProps {
  title: string;
  subtitle: string;
  exampleCards: ExampleCardProps[];
}

export default function Examples({
  title,
  subtitle,
  exampleCards
}: ExampleProps) {
  return (
    <Box mt={4}>
      <Box mt={4} display="flex" gap={1} alignItems="center">
        <Typography mb={2} fontSize={30} color={'primary'}>
          {title}
        </Typography>
        <Typography mb={2} fontSize={30} color={'secondary'}>
          {subtitle}
        </Typography>
      </Box>

      <Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Grid container spacing={2}>
          {exampleCards.map((card) => (
            <Grid item xs={4} key={card.title}>
              <ExampleCard
                title={card.title}
                description={card.description}
                sampleText={card.sampleText}
                sampleResult={card.sampleResult}
                requiredOptions={card.requiredOptions}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
