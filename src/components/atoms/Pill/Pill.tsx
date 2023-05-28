import * as S from './Pill.styles'

export type PillProps = {
  label: string
  color: S.PillColors
}
const Pill : React.FC<PillProps> = ({ label, color }) => {
    return (
        <S.PillContainer color={color}>
            {label}
        </S.PillContainer>
    )
}

export default Pill;
