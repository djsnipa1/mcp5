{ pkgs }: {
    deps = [
		pkgs.most
		pkgs.man-db
		pkgs.neovim-unwrapped
		pkgs.gh
		pkgs.bat
		pkgs.lf
		pkgs.lazygit
		pkgs.bash-completion
		pkgs.nodejs-18_x
			pkgs.nodePackages.pnpm
			pkgs.nodePackages.jsdoc
		pkgs.gtk3
		pkgs.gobject-introspection
		pkgs.libglibutil
    ];
}
