export const RegularComponentNoProps = () => {
    console.log('RegularComponentNoProps rendered')
    return (
            <div>
                NO PROPS
                I will re-render each time my parent re-renders
            </div>
    )
};
