import { ComponentStory, ComponentMeta } from '@storybook/react';
import  { MUIButton }  from './MUIButton';

export default {
    title: 'Title',
    component: MUIButton,
    argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof MUIButton>;

const Template: ComponentStory<typeof MUIButton> = (args) => <MUIButton {...args} />;
/// Stories
export const Story1 = Template.bind({});
Story1.args = { primary: true, label: 'MUIButton',};
export const Story2 = Template.bind({});
Story2.args = { label: 'MUIButton',};