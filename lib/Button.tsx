import { Button } from '@chakra-ui/button';
import React, { useState } from 'react'

const Btn = ({ children }: any) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => setIsActive(current => !current);

    return <Button colorScheme='blue' onClick={handleClick} variant={isActive ? "solid" : "outline"} >{children}</Button>;
}

export default Btn;