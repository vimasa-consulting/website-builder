import userAspirations from "./userAspirations";
import solutionToUserPain from "./solutionToUserPain";
import personUseCase from "./personUseCase";

const emotionMapping = [
    {
        label: 'Solution To User Pain 1',
        key: 'solutionToUserPain1',
        content: solutionToUserPain.solutionToUserPain1
    },
    {
        label: 'Solution To User Pain 2',
        key: 'solutionToUserPain2',
        content: solutionToUserPain.solutionToUserPain2
    },
    {
        label: 'Solution To User Pain 3',
        key: 'solutionToUserPain3',
        content: solutionToUserPain.solutionToUserPain3
    },
    {
        label: 'User Aspirations 1',
        key: 'userAspirations1',
        content: userAspirations.userAspirations1
    },
    {
        label: 'User Aspirations 2',
        key: 'userAspirations2',
        content: userAspirations.userAspirations2
    },
    {
        label: 'User Aspirations 3',
        key: 'userAspirations3',
        content: userAspirations.userAspirations3
    },
    {
        label: 'Person Use-Case 1',
        key: 'personUseCase1',
        content: personUseCase.personUseCase1
    },
    {
        label: 'Person Use-Case 2',
        key: 'personUseCase2',
        content: personUseCase.personUseCase2
    },
    {
        label: 'Person Use-Case 3',
        key: 'personUseCase3',
        content: personUseCase.personUseCase3
    },
]

export default emotionMapping; 