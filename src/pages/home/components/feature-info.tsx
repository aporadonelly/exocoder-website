import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface FeatureListItemProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

function FeatureListItem(props: FeatureListItemProps) {
    const { icon, title, description } = props;

    return (
        <ListItem alignItems='flex-start'>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={title}
                secondary={description}
                primaryTypographyProps={{
                    fontWeight: 'bold',
                    gutterBottom: true,
                }}
                secondaryTypographyProps={{
                    variant: 'body1',
                }}
            />
        </ListItem>
    )
}

export default FeatureListItem;