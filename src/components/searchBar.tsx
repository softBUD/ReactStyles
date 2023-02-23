import React from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'
import Colors from 'theme/Colors'
import Size from 'theme/Size'

interface V2SearchBarStyleProps
  extends V2SearchBarInputStyleProps,
    V2SearchBarContainerStyleProps {
  iconColor: string
}

interface V2SearchBarContainerStyleProps {
  searchBoxMaxWidth: number
  searchBoxHeight: number
  borderRadius?: number
}

interface V2SearchBarInputStyleProps extends V2SearchBarContainerStyleProps {
  placeholderColor?: string
}

interface V2SearchBarProps {
  theme: V2SearchBarStyleProps
  placeholdText?: string
  value: string
  disabledValue: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledInputSearchContainer = styled.div<V2SearchBarContainerStyleProps>`
  max-width: ${(props) => props.searchBoxMaxWidth}px;
  border: 1px solid ${Colors.text.disabled};
  border-radius: ${(props) => props.borderRadius}px;
  height: ${(props) => props.searchBoxHeight ?? 40}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInputSearch = styled.input<V2SearchBarInputStyleProps>`
  border: 0;
  padding: ${Size.padding.searchBar.searchBox};
  max-height: ${(props) => props.searchBoxHeight - 20}px;
  max-width: ${(props) => props.searchBoxMaxWidth - 28}px;

  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`

const StyledInputIconButton = styled.button`
  position: relative;
  top: 2px;
  right: 12px;
`

function V2SearchBar({
  theme,
  disabledValue,
  placeholdText,
  value,
  onChange,
  onClick,
}: V2SearchBarProps) {
  const {t} = useTranslation()

  return (
    <StyledInputSearchContainer
      searchBoxMaxWidth={theme.searchBoxMaxWidth}
      searchBoxHeight={theme.searchBoxHeight}
      borderRadius={theme.borderRadius}
    >
      <StyledInputSearch
        placeholder={placeholdText ?? t('ISearchKeyword')}
        placeholderColor={theme.placeholderColor}
        searchBoxMaxWidth={theme.searchBoxMaxWidth}
        searchBoxHeight={theme.searchBoxHeight}
        disabled={disabledValue}
        onChange={onChange}
        value={value}
      />
      <StyledInputIconButton type='submit' onClick={onClick}>
        <SvgIcon name='search' iconColor={theme.iconColor} />
      </StyledInputIconButton>
    </StyledInputSearchContainer>
  )
}