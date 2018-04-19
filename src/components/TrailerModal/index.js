import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalBasicExample = ({ name, link }) => {
  const Link = (<Button basic color='teal'>{name}</Button>);
  return (
    <Modal trigger={Link} basic size='small'>
      <Modal.Content style={{ textAlign: 'center' }}> 
        <iframe width='420' height='315' src={link}></iframe>
      </Modal.Content>
    </Modal>
  );
};

export default ModalBasicExample;
