import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrowHandler = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={()=>{
          console.log("nextttt");
          scrollPrev();}}
        fontSize='2xl'
        cursor='pointer'
        
      />
    </Flex>
  );
}

const RightArrowHandler = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={()=>scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        
    />
    </Flex>
  );
}
 const ImageSrollbar = ({ data }) => {
  return (
    <Image
          key = {data.id}
          itemID={data.id}
          alt = "property" 
          placeholder="blur" 
          blurDataURL={data.url} 
          src={data.url} width={1000} height={500}  
           sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
  );
    {/*<ScrollMenu LeftArrow={LeftArrowHandler} RightArrow={RightArrowHandler}  style={{ overflow: 'hidden' }} >
      
      {data.map((item) => (
        <Box key = {item.id} width='910px'   overflow='hidden' p='1'>
          
          this is the bet
          <Image 
          key = {item.id}
          itemID={item.id}
          alt = "property" 
          placeholder="blur" 
          blurDataURL={item.url} 
          src={item.url} width={1000} height={500}  
           sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
      </ScrollMenu>*/}
  
}
export default ImageSrollbar;
