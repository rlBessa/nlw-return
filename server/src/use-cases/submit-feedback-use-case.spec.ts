import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    test('should be able to submite a feedback', async () => {       

        await expect(submitFeedback.execute({
            type: 'BUG', 
            comment: 'example comment',
            screenshot: 'data:image/png;base64,91y12he1h9',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    test('should not be able to submite a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '', 
            comment: 'example comment',
            screenshot: 'data:image/png;base64,91y12he1h9',
        })).rejects.toThrow();
    });

    test('should not be able to submite a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG', 
            comment: '',
            screenshot: 'data:image/png;base64,91y12he1h9',
        })).rejects.toThrow();
    });

    test('should not be able to submite a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG', 
            comment: 'ta tudo bugado',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});