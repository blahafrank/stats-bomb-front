COMPONENT_NAME=$1

mkdir ./components/"$COMPONENT_NAME"
wait
sh ./scripts/create_component/create_component_styles.sh "$COMPONENT_NAME" > ./components/"$COMPONENT_NAME"/styles.module.scss
wait
sh ./scripts/create_component/create_component.sh "$COMPONENT_NAME" > ./components/"$COMPONENT_NAME"/"$COMPONENT_NAME".tsx
wait
sh ./scripts/create_component/create_component_index.sh "$COMPONENT_NAME" > ./components/"$COMPONENT_NAME"/index.ts
