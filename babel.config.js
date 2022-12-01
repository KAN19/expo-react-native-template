module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"nativewind/babel",
			[
				"module-resolver",
				{
					alias: {
						api: "./src/api",
						assets: "./src/assets",
						components: "./src/components",
						constants: "./src/constants",
						helpers: "./src/helpers",
						models: "./src/models",
						navigations: "./src/navigations",
						store: "./src/store",
						scenes: "./src/scenes",
						utils: "./src/utils",
					},
				},
			],
		],
	};
};
