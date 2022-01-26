import { ComponentStory, ComponentMeta } from '@storybook/react';
import MUICarousel from './MUICarousel';
export default {
    title: 'MUICarousel',
    component: MUICarousel,
} as ComponentMeta<typeof MUICarousel>;
const Template: ComponentStory<typeof MUICarousel> = (args) => <MUICarousel {...args} />;


/// Stories  

const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

export const Story1 = Template.bind({});
Story1.args = { items: items };

