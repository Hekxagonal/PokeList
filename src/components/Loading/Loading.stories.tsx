import Component from '.'

export default {
    title: 'Simple Components/Loading',
    component: Component,
    args: {
        loadingState: { isError: false },
    },
    argTypes: {
        loadingState: { type: 'object' }
    }
}

export const Loading = (args: any) => <Component {...args} />

export const LoadingError = (args: any) => <Component {...args} />

LoadingError.args = {
    loadingState: {isError: true, error: {message: 'ERROR IN API'}}
}