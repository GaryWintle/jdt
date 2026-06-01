import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestQuestion = ({ index, questionText }) => {
  return (
    <Card className="my-4 mx-2">
      <CardHeader>
        <CardTitle>{`Question ${index}`}</CardTitle>
      </CardHeader>
      <CardContent>{questionText}</CardContent>
      <CardFooter>
        <Button className="bg-teal-600" size="lg">
          True
        </Button>
        <Button className="bg-red-800" size="lg">
          False
        </Button>
      </CardFooter>
    </Card>
  );
};
export default TestQuestion;
