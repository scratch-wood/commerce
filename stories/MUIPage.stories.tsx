import { ComponentStory, ComponentMeta } from '@storybook/react';
import MUIPage from './MUIPage';

export default {
    title: 'MUIPage',
    component: MUIPage,
    //argTypes: {backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof MUIPage>;


const Template: ComponentStory<typeof MUIPage> = (args) => <MUIPage />;
/// Stories
export const Story1 = Template.bind({});
//Story1.args = { primary: true, label: 'MUIPage',};
