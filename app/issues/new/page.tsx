import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-3'>
            <TextFieldRoot>
                <TextFieldInput placeholder='Title'></TextFieldInput>
            </TextFieldRoot>
            <TextArea placeholder="Reply to comment…" />
            <Button>Submit new issue</Button>
        </div>
    )
}

export default NewIssuePage