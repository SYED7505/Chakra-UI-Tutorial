import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs colorScheme="orange">
      <TabList>
        <Tab _selected={{ color: "white", bg: "orange" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "orange" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, veniam.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum, dolor sit amet iang.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, veniam.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum, dolor sit amet iang.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
