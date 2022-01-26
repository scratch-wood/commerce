import { ComponentStory, ComponentMeta } from '@storybook/react';
import MUIContainer from './MUIContainer';

export default {
    title: 'DefaultContainer',
    component: MUIContainer,
    //argTypes: { backgroundColor: { control: 'color' }, },
} as ComponentMeta<typeof MUIContainer>;

const Template: ComponentStory<typeof MUIContainer> = (args) => <MUIContainer {...args} />;

/// Stories
export const Story1 = Template.bind({});
Story1.args = {
    height: '100vh',
    background: "https://images.squarespace-cdn.com/content/v1/533ef944e4b0cccdfc39f46a/1494088146457-8E814M4XW92K3CGYZK53/contemporary+art+gallery+naples+fl+cs.jpg?format=2500w"
};
