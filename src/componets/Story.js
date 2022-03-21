import React from 'react';
import styled from 'styled-components';


const Story = () => {
    return (
        <>
            <Title>
                <h2>Matrimony Service with Millions of Success Stories</h2>
            </Title>
            <StorySection>
                <StoryDiv>
                    <StoryImage>
                        <img style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>my self vailbhav and my wif alka my self vailbhav and my wif alka my self vailbhav and my wif alka
                            my self vailbhav and my wif alka
                        </p>
                    </StoryDetails>
                </StoryDiv>
                <StoryDiv>
                    <StoryImage>
                        <img style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>my self vailbhav and my wif alka my self vailbhav and my wif alka my self vailbhav and my wif alka
                            my self vailbhav and my wif alka
                        </p>
                    </StoryDetails>
                </StoryDiv>
                <StoryDiv>
                    <StoryImage>
                        <img style={{width:"320px",height:"250px"}} src="https://img.shaadi.com/success-story/2SH09514809-hSH27371565-big.jpg" />
                    </StoryImage>
                    <StoryDetails>
                        <h3>VAIBHAV AND ALKA</h3>
                        <p>my self vailbhav and my wif alka my self vailbhav and my wif alka my self vailbhav and my wif alka
                            my self vailbhav and my wif alka my self vailbhav and my wif alka my self vailbhav and my wif alka
                        </p>
                    </StoryDetails>
                </StoryDiv>
            </StorySection>
        </>
    )


}
const Title = styled.div`
>h2 {
    font-size: 35px;
    text-align:center;
    margin-top:70px;
    margin-bottom:70px;
    color:red;

}
`
const StorySection = styled.div`
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;`

const StoryDiv = styled.div`
   width:330px;
   height:420px;
   margin: 24px;
   padding:4px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`

const StoryImage = styled.div``

const StoryDetails = styled.div`
  width:330;
  height:250px;
  
  >h3{
    font-size: 22px;
    line-height: 22px;
  },
   >p{
    font-size: 15px;
    font-weight:500;
    color: #72727d;
   }`
export default Story;